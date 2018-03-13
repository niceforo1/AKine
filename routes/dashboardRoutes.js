module.exports = (app, mongoose) => {
    const Patient = mongoose.model('patient');
    const Professional = mongoose.model('professional');

    app.get('/api/dashboard/home', async (req, res) => {
        try {

            const patient = await Patient.count({});
            const professional = await Professional.count({});
            let result = {
                'professionalCountTotal': professional, 'patientCountTotal': patient,
                'patientInsurances': [
                    {
                        'name': 'Sancor',
                        'value': 3
                    },
                    {
                        'name': 'Pami',
                        'value': 12
                    },
                    {
                        'name': 'Osecac',
                        'value': 4
                    },
                    {
                        'name': 'Osde',
                        'value': 6
                    }
                ]
            };

            res.send(result);
        }
        catch(err) {
            res.status(500).send(err);
        }
    }
    );
};
