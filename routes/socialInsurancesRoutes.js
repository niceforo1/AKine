module.exports = (app, mongoose) => {
    const SocialInsurance = mongoose.model('socialInsurance');

    app.get('/api/socialInsurances', async (req, res) => {
        try {
            const socialInsurance = await SocialInsurance.find();
            res.send(socialInsurance);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.get('/api/socialInsurances/:id', async (req, res) => {
        try {
            const socialInsurance = await SocialInsurance.findById(req.params.id);
            res.send(socialInsurance);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.get('/api/socialInsurancesName/:name', async (req, res) => {
        try {
            const socialInsurance = await SocialInsurance.findOne({
                name: req.params.name
            });
            res.send(socialInsurance);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.post('/api/socialInsurances', async (req, res) => {
        try {
            const { name, contact, email, address, phones } = req.body;

            const socialInsurance = await new SocialInsurance({
                name,
                contact,
                email,
                address,
                phones
            });

            await socialInsurance.save();
            res.send(socialInsurance);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.delete('/api/socialInsurances/:id', async (req, res) => {
        try {
            const socialInsurance = await SocialInsurance.findByIdAndRemove(
                req.params.id
            );
            res.send(socialInsurance);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.put('/api/socialInsurances/:id', async (req, res) => {
        try {
            const obSoc = await SocialInsurance.findOneAndUpdate(
                { _id: req.params.id },
                req.body
            );
            const socialInsurance = await SocialInsurance.find();
            res.send(socialInsurance);
        } catch (err) {
            res.status(500).send(err);
        }
    });
};
