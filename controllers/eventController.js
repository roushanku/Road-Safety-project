let eventList = []
const getEvent = async function (req , res){

    res.send('Welcome to server' , {
        "timestamp": Date,
        "is_overspeeding": true,
        "vehicle_id": 1234,
        "location_type": "highway"
    })
}

const addEvent = async function (req , res){
    let event =
        {
            "timestamp": Date,
            "is_overspeeding": true,
            "vehicle_id": 1234,
            "location_type": "highway"
        }
    eventList.push(event)
    // console.log(req.params.alertId)
    res.send('Event added successfully' , event)
}

module.exports = {getEvent , addEvent}