/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "dft_impl.h"

#ifdef OHOS_ACELITE_PRODUCT_WATCH
#include "ace_log.h"
#include "js_app_context.h"

namespace OHOS {
namespace ACELite {
DftImpl *DftImpl::GetInstance()
{
    static DftImpl instance;
    return &instance;
}

char *DftImpl::GetPagePath()
{
    const char * const pagePath = JsAppContext::GetInstance()->GetCurrentJsPath();
    if (pagePath == nullptr) {
        return nullptr;
    }

    // remove suffix from js
    // pages/index/index.js -> pages/index/index
    size_t suffixLen = 3;
    size_t len = strlen(pagePath) - suffixLen;
    char *path = static_cast<char *>(ace_malloc(len + 1));
    if (path == nullptr) {
        HILOG_ERROR(HILOG_MODULE_ACE, "malloc buffer for path failed.");
        return nullptr;
    }
    if (memcpy_s(path, len, pagePath, len) != 0) {
        ace_free(path);
        path = nullptr;
        return nullptr;
    }
    path[len] = '\0';
    return path;
}

void DftImpl::RegisterPageReplaced(PageReplacedCallback handler)
{
    pageReplacedCallback_ = handler;
}

void DftImpl::CallbackPageReplaced(int state)
{
    if (pageReplacedCallback_ != nullptr) {
        char *currentPath = DftImpl::GetPagePath();
        pageReplacedCallback_(currentPath, state);
        ACE_FREE(currentPath);
    }
}
} // namespace ACELite
} // namespace OHOS
#endif
