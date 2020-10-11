import React, { useState, useEffect } from 'react';
import firebaseApp from './../firebase';
import View from './View'

function Overview() {

    const [data, setData] = useState();

    useEffect(() => {
        firebaseApp.firestore().collection('posts').onSnapshot(snapshot => {
            setData(snapshot.docs.map(doc => ({ id: doc.id, info: doc.data() })))
        })
    }, [])


    return (
        <div>

            {data && <div>
                {
                    data.map(({ id, info }) => (
                        <View id={id} BgPic={info.BgPic} Id={info.Id} Title={info.Title} />
                    ))
                }
            </div>}


        </div>
    )
}

export default Overview
