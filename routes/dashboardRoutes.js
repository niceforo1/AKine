
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

/*
module.exports = (app, mongoose) => {
    const Patient = mongoose.model('patient');
    const Professional = mongoose.model('professional');

    app.get('/api/dashboard/home', async (req, res) => {
            try {

                const patient = await Patient.count({});
                const professional = await Professional.count({});
                const pacientesPorObSoc = await Patient.aggregate({
                        $group:
                            {
                                _id : {
                                    id : "$socialInsurance._id",
                                    names : "$socialInsurance.number"
                                },
                                value : { $sum: 1 }
                            }
                    }
                );
                let result = {
                    'professionalCountTotal': professional,
                    'patientCountTotal': patient,
                    'patientInsurances': pacientesPorObSoc
                };

                res.send(result);
            }
            catch(err) {
                res.status(500).send(err);
            }
        }
    );
};
*/