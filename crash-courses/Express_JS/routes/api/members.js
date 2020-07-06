const express = require('express');
const members = require('../../Members');
const router = express.Router();
const uuid = require('uuid');

// Gets All Members
router.get('/', (req, res) => res.json(members));

// Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json( {msg: `Member with id ${req.params.id} not found`} );
    }
});

// Create Member
router.post('/', (req, res) => {
    // res.send(req.body());
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };

    if (!newMember.name || !newMember.email) {
        return res.status(400).json( {msg: "Please include a name and email"} );
    }

    members.push(newMember);
    res.redirect("/")
    // res.json(members);
});

// Update member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json( {msg: "Member updated", member} );
            }
        });
    } else {
        res.status(400).json( {msg: `Member with id ${req.params.id} not found`} );
    }
});

// Delete member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        members = members.filter(member => member.id !== parseInt(req.params.id));
        res.json( {msg: "Member deleted", members} );
    } else {
        res.status(400).json( {msg: `Member with id ${req.params.id} not found`} );
    }
});

module.exports = router;