import {firestore} from '../../../../firebase/admin'

export default (request, response) => {
    const {query} = request
    const {id} = query


    firestore.collection('dtwit').doc(id).get().then((doc) => {
        const data = doc.data()
        const { createdAt } = data
        const normalizeDate = new Date(createdAt.seconds) * 1000

        

        return response.json({...data, createdAt: normalizeDate})
    }).catch(e => {
        response.status(404).end()
    })


}