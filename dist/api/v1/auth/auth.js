"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Hello World!'
    });
});
exports.default = router;
//# sourceMappingURL=auth.js.map