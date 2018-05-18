module.exports = (app, mongoose) => {
  const Event = mongoose.model('event');

  const data = [
        {
            id  : 'events',
            data: [
                {
                    start    : new Date(),
                    end      : new Date(),
                    title    : 'A 3 day event',
                    allDay   : false,
                    color    : {
                        primary  : '#ad2121',
                        secondary: '#FAE3E3'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: 'Los Angeles',
                        notes   : 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                    }
                },
                // {
                //     start    : startOfDay(new Date()),
                //     title    : 'An event with no end date',
                //     allDay   : false,
                //     color    : {
                //         primary  : '#e3bc08',
                //         secondary: '#FDF1BA'
                //     },
                //     resizable: {
                //         beforeStart: true,
                //         afterEnd   : true
                //     },
                //     draggable: true,
                //     meta     : {
                //         location: 'Los Angeles',
                //         notes   : 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                //     }
                // },
                // {
                //     start    : subDays(endOfMonth(new Date()), 3),
                //     end      : addDays(endOfMonth(new Date()), 3),
                //     title    : 'A long event that spans 2 months',
                //     allDay   : false,
                //     color    : {
                //         primary  : '#1e90ff',
                //         secondary: '#D1E8FF'
                //     },
                //     resizable: {
                //         beforeStart: true,
                //         afterEnd   : true
                //     },
                //     draggable: true,
                //     meta     : {
                //         location: 'Los Angeles',
                //         notes   : 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                //     }
                // },
                // {
                //     start    : addHours(startOfDay(new Date()), 2),
                //     end      : new Date(),
                //     title    : 'A draggable and resizable event',
                //     allDay   : false,
                //     color    : {
                //         primary  : '#e3bc08',
                //         secondary: '#FDF1BA'
                //     },
                //     resizable: {
                //         beforeStart: true,
                //         afterEnd   : true
                //     },
                //     draggable: true,
                //     meta     : {
                //         location: 'Los Angeles',
                //         notes   : 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                //     }
                // }
            ]
        }
    ];

  app.get('/api/events', async (req, res) => {
    try {
      // const event = await Event.find().populate({
      //     path: 'patient',
      //     model: 'patient'
      // });
      res.send(data[0]);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/events/:id', async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      res.send(event);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post('/api/events', async (req, res) => {
    try {
      const {
        professional,
        patient,
        consultationTypeId,
        requestDay,
        date,
        status,
        overSchedule,
        spontaneous,
        observations
      } = req.body;

      const event = await new Event({
        professional,
        patient,
        consultationTypeId,
        requestDay,
        date,
        status,
        overSchedule,
        spontaneous,
        observations
      });

      await event.save();
      res.send(event);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.delete('/api/events/:id', async (req, res) => {
    try {
      const event = await Event.findByIdAndRemove(
        req.params.id
      );
      res.send(event);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.put('/api/events/:id', async (req, res) => {
    try {
      const event = await Event.update({ _id: req.params.id }, req.body);
      res.send(event);
    } catch (err) {
      res.status(500).send(err);
    }
  });
};
