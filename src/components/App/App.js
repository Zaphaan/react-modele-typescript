"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Container = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n  margin: ", ";\n"], ["\n  padding: ", ";\n  margin: ", ";\n"])), function (props) { return ('padding' in props ? props.padding : '0'); }, function (props) { return ('margin' in props ? props.margin : 0); });
function App(_a) {
    var name = _a.name;
    return <exports.Container padding="1em">Hello {name}!</exports.Container>;
}
exports["default"] = App;
var templateObject_1;
