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
export const changeStatusIf = function() {
  if (this.ifStatus == true) {
    this.ifStatus = false;
  } else {
    this.ifStatus = true;
  }
};
export const changeDisplay = function() {
  if (this.display === "flex") {
    this.display = "none";
  } else {
    this.display = "flex";
  }
};
export const changeStatus = function() {
  if (this.status == true) {
    this.status = false;
  } else {
    this.status = true;
  }
};
export const clickEvent = function() {
  this.value = "点击已触发";
  this.percent = this.percent + 10;
};
export const longpressEvent = function() {
  this.value = "长按已触发";
  this.percent = this.percent + 20;
};
export const swipeEvent = function(e) {
  this.value = "swipe方向：" + e.direction;
};