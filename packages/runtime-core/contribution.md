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

 # How to contribute to the runtime-core of JS framework
 ## 1. Modify code
 ## 2. Compile the framework itself
 > npm install
 > npm run build

 you will get the **framework.min.js** output under `runtime-core/build` folder
 ## 3. Prepare the snapshot tool
 run `ace_lite_jsfwk/tools/snapshot/jerry-bin/build_jerry.sh`, the `jerry-snapshot` tool will be generated into `ace_lite_jsfwk/tools/snapshot/jerry-bin/linux/`.

 ## 4. Generate framework.min.bc
 > cd packages/runtime-core/build/
 > ./../../../tools/snapshot/jerry_bin/linux/jerry-snapshot generate -o framework.min.bc ./framework.min.js

 ## 5. Update the JS and sanpshot array in C++ code
 > cd tools/snapshot/
 > python framework2char.py

 ## 6. add changed file to git
 > git add src/core/base/framework_min_js.h
 > git add src/core/base/framework_min_bc.h
