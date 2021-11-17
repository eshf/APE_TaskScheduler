const router = express()
router.get('/', async(req, res) => {
    const employeeSchedule = await employeeSchedule.find()
        .sort('-daySchedule');
    res.send(employeeSchedule);
});


router.post('/', async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const Employee = await Employee.findById(req.body.employeeid);
    if (!Employee) return res.status(400).send('Invalid employee.');

    const schedule = await schedule.findById(req.body.scheduleid);
    if (!schedule) return res.status(400).send('Invalid schedule.');

    if (schedule.DayShift > 5) return res.status(400).send('Please ensure one rest day after two days of work.');

    let employeeschedule = new employeeSchedule({
        employee: {
            _employeeid: Employee._employeeid,
            _employeeName: Employee._employeeName,
            _employeePwrd: Employee._employeePwrd,
            _isEmployee: Employee._isEmployee,
        },
        schedule: {
            _scheduleid: schedule.scheduleid,
            _dayShift: schedule._dayShift,
            _daySchedule: schedule._daySchedule
        }
    });
    employeeschedule = await employeeschedule.save();


    schedule.save();

    res.send(employeeschedule);
});

router.get('/:scheduleid', async(req, res) => {
    const employeeschedule = await employeeSchedule.findById(req.params.scheduleid);

    if (!employeeschedule) return res.status(404).send('The schedule of the employee with the given schedule ID was not found.');

    res.send(employeeschedule);
});

module.exports = router;