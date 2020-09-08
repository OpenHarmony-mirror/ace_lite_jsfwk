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
import {goPage, routePage} from "../../../../common/js/general";
export default {
  data: {
    displayVal: "flex",
    flag: true
  },
  changeDisplay() {
    if (this.flag) {
      this.displayVal = "none";
      this.flag = false;
    } else {
      this.displayVal = "flex";
      this.flag = true;
    }
  },
  ...goPage("pages/component/marquee/index/index")
};