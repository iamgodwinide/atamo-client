const router = require("express").Router();
const shortid = require("shortid");
const Code = require("./model/Code");
const CodeNew = require("./model/CodeNew");
const Address = require("./model/NewAddress");


router.get("/__all_addresses", async (req, res) => {
    try {
        const addresses = (await Code.find({})).map(add => add.address);
        return res.status(200).json(addresses);
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        });
    }
})

router.get("/puzzle/:answer", async (req, res) => {
    try {
        const { answer } = req.params;
        if (!answer) {
            return res.status(200).json({
                success: false,
                msg: "Please provide answer"
            })
        }

        if (answer !== 'AtAsPoGaW') {
            return res.status(200).json({
                success: false,
                msg: "wrong answer"
            })
        } else {
            return res.status(200).json({
                success: true,
                msg: "correct"
            })
        }

    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        });
    }
});


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
        const allAddress = await Code.find({});
        if (exists) {
            return res.status(200).json({
                success: true,
                code: exists.code
            });
        }

        if (allAddress.length > 499) {
            return res.status(200).json({
                success: false,
                msg: "The Gate has been closed."
            })
        }
        else {
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
            success: false,
            msg: "Internal server error"
        });
    }
});


router.get("/code-gen/:code", async (req, res) => {
    try {
        const { code } = req.params;

        const newData = new CodeNew({
            code,
        })
        await newData.save();
        return res.status(200).json({
            success: true,
            code
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        });
    }
});





router.get("/asahitrials/:answer/", async (req, res) => {
    try {
        const { answer } = req.params;
        if (answer.toLocaleLowerCase() === 'akira') {
            return res.status(200).json({
                success: true
            })
        } else {
            return res.status(200).json({
                success: false
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        })
    }
});


router.post("/asahitrials/address", async (req, res) => {
    try {
        const { address } = req.body;
        const allAddress = await Address.find({});
        if (allAddress.length < 500) {
            const newAdd = new Address({
                address
            });
            await newAdd.save();
            return res.status(200).json({
                success: true
            })
        } else {
            return res.status(200).json({
                success: false,
                msg: "The gate is closed"
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        })
    }
});

module.exports = router;

module.exports = router;