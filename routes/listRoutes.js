const list = require('../models/surveys.js')
const passport = require('passport')
var moment = require('moment');
const day1 = moment().subtract(6,'days').format('MM-DD-YYYY')
const day2 = moment().subtract(5,'days').format('MM-DD-YYYY')
const day3 = moment().subtract(4,'days').format('MM-DD-YYYY')
const day4 = moment().subtract(3,'days').format('MM-DD-YYYY')
const day5 = moment().subtract(2,'days').format('MM-DD-YYYY')
const day6 = moment().subtract(1,'days').format('MM-DD-YYYY')
const day7 = moment().format('MM-DD-YYYY')

module.exports = (app) => {

app.get('/api/productivity', (req, res) => {
    var user =  req.user[0].id
    list.view(user).then( result => {
        var array = []
        var seven = result.filter((element) => {
            var time = moment(element.created_at).format('MM-DD-YYYY')
            return time === day7 && element.complete === 1
        })
        var six = result.filter((element) => {
            var time = moment(element.created_at).format('MM-DD-YYYY')
            return time === day6 && element.complete === 1
        })
        var five = result.filter((element) => {
            var time = moment(element.created_at).format('MM-DD-YYYY')
            return time === day5 && element.complete === 1
        })
        var four = result.filter((element) => {
            var time = moment(element.created_at).format('MM-DD-YYYY')
            return time === day4 && element.complete === 1
        })
        var three = result.filter((element) => {
            var time = moment(element.created_at).format('MM-DD-YYYY')
            return time === day3 && element.complete === 1
        })
        var two = result.filter((element) => {
            var time = moment(element.created_at).format('MM-DD-YYYY')
            return time === day2 && element.complete === 1
        })
        var one = result.filter((element) => {
            var time = moment(element.created_at).format('MM-DD-YYYY')
            return time === day1 && element.complete === 1
        })
        // array.push([...seven])
        // array.push([...six])
        // array.push([...five])
        // array.push([...four])
        // array.push([...three])
        // array.push([...two])
        // array.push([...one])
        array.push([seven])
        array.push([six])
        array.push([five])
        array.push([four])
        array.push([three])
        array.push([two])
        array.push([one])
        res.send(array)
    })
})

app.get('/api/list', (req, res) => {
    var user =  req.user[0].id
    list.view(user).then( result => {
        res.send(result)
    })
})

app.post('/api/list/item', (req,res) => {
    console.log(req.body.item)
    console.log(req.body.name)
    if (!req.body.item) {
        console.log('Blank')
        res.end()
    } else {
    list.insert(req.body.item.trim(),req.body.name.trim(),req.user[0].id).then (result => {
        console.log(result)
        res.end()
    })
}
})

app.put('/api/list/complete', (req,res) => {
    //console.log(req.body)
    var number = parseInt(req.body.taskId)
    //var task = req.body.taskName
    list.updateOne2(true, number).then(result => {
        //console.log(result)
    })
    res.end()
})

app.put('/api/list/restore', (req,res) => {
    //console.log(req.body)
    var number = parseInt(req.body.taskId)
    //var task = req.body.taskName
    list.updateOne2(false, number).then(result => {
        //console.log(result)
    })
    res.end()
})

app.put('/api/list/edit', (req,res) => {
    //console.log(req.body)
    if (!req.body.updatedTask) {
        res.end()
    }
    else {
    var number = parseInt(req.body.taskId)
    var updatedTask = req.body.updatedTask.trim()
    //var task = req.body.taskName
    list.updateEdit(updatedTask, number).then(result => {
        //console.log(result)
    })
    res.end()
    }
})
app.delete('/api/list/delete', (req,res) => {
    console.log(req.body)
    var number = parseInt(req.body.taskID)
    //var task = req.body.taskName
    list.remove(number).then(result => {
        //console.log(result)
    })
    res.end()
})
}