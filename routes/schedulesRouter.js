const router = express()
router.get('/', async(req, res) => {
    const schedules = await schedules.find().sort('scheduleid');
    res.send(schedules);
});

router.get('/models/schedule', async(req, res) => {
    const schedules = await schedules.findOneAndRemove({ $gt: 1[{ daySchedule: req.body.daySchedule }, { DayShift: req.body.DayShift }] }) //If the day has more than 1 shift
    res.send(schedules);
});




router.get('/models/schedule', async(req, res) => {
    const schedules = await schedules.findOneAndRemove({ $gte: 4[{ daySchedule: req.body.daySchedule }, { DayShift: req.body.DayShift }] })
        //Limit to 4 working days (4+3)=7, average of 7 days, one week- 3 days off, the other week- 4 days off
    res.send(schedules);
});

router.post('/', async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let schedule = new schedule({ scheduleid: req.body.scheduleid });
    schedule = await schedule.save();

    res.send(schedule);
});

router.put('/:scheduleid', async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const schedule = await schedules.findByIdAndUpdate(req.params.scheduleid, { daySchedule: req.body.daySchedule }, {
        new: true
    });

    if (!schedule) return res.status(404).send('The schedule on the given date was not found.');

    res.send(schedule);
});

router.delete('/:scheduleid', async(req, res) => {
    const schedule = await schedules.findByIdAndRemove(req.params.scheduleid);

    if (!schedule) return res.status(404).send('The schedule on the given date was not found.');

    res.send(schedule);
});

router.get('/:scheduleid', async(req, res) => {
    const schedule = await schedules.findById(req.params.schedule);

    if (!schedule) return res.status(404).send('The schedule on the given date was not found.');

    res.send(schedule);
});