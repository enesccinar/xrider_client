import { useContext } from 'react'
import { Context as TrackRecordContext } from '../context/TrackRecordContext'
import { Context as LocationContext } from '../context/LocationContext'
import { navigate } from '../navigationRef'

export default () => {
    const { createTrackRecord } = useContext(TrackRecordContext)
    const {
        state: { locations, name, startTime, endTime },
        reset
    } = useContext(LocationContext)

    const saveTrackRecord = async () => {
        await createTrackRecord(name, locations, startTime, endTime)
        reset()
        navigate('trackRecordList')
    }

    return [saveTrackRecord]
}