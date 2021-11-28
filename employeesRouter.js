const router = express()
router.get('/', async(req, res) => {
    const employees = await User.find().sort('userid');
    res.send(employees);
});

router.post('/', async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let employee = new employee({
        userid: req.body.userid,
        fullName: req.body.fullName,
        password: req.body.password,
        isEmployee: req.body.isEmployee,
    });

    employee = await employee.save();

    res.send(employee);
});

router.put('/:userid', async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const employee = await User.findByIdAndUpdate(req.params.userid, {
        userid: req.body.userid,
        password: req.body.password,
        fullName: req.body.fullName,
        isEmployee: req.body.isEmployee,
    }, { new: true });

    if (!employee) return res.status(404).send('The employee with the given employee ID was not found.');

    res.send(employee);
});

router.delete('/:userid', async(req, res) => {
    const employee = await User.findByIdAndRemove(req.params.userid);

    if (!employee) return res.status(404).send('The employee with the given emplpyee ID was not found.');

    res.send(employee);
});

router.get('/:userid', async(req, res) => {
    const employee = await User.findById(req.params.userid);

    if (!employee) return res.status(404).send('The employee with the given emplpyee ID was not found.');

    res.send(employee);
});