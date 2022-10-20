const router = require("express").Router();
const shortid = require("shortid");
const Code = require("./model/Code");



router.get("/code-generate/:address", async (req, res) => {
    try {
        const { address } = req.params;
        if (!address) {
            return res.status(400).json({
                success: false,
                msg: "Please provide a wallet address!"
            })
        }

        const exists = await Code.findOne({ address });
        if (exists) {
            return res.status(200).json({
                success: true,
                code: exists.code
            });
        } else {
            const newCode = shortid.generate();
            const newData = new Code({
                code: newCode,
                address
            })
            await newData.save();
            return res.status(200).json({
                success: true,
                code: newCode
            })
        }
    } catch (err) {
        return res.status(500).json({
            msg: "Internal server error"
        });
    }
});

module.exports = router;