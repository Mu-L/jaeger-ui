// Copyright (c) 2018 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Per the resolution of https://github.com/jaegertracing/jaeger-ui/issues/42,
// package.json#homepage is set to "." and the document MUST have a <base>
// element to define a usable base URL.
import { getAppEnvironment } from './utils/constants';

const baseNode = document.querySelector('base');
if (!baseNode && getAppEnvironment() !== 'test') {
  throw new Error('<base> element not found');
}

const sitePrefix = baseNode ? baseNode.href : `${global.location.origin}/`;

// Configure the webpack publicPath to match the <base>:
// https://webpack.js.org/guides/public-path/#on-the-fly

window.__webpack_public_path__ = sitePrefix;

export default sitePrefix;
