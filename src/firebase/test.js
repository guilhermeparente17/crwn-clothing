import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebase = firebase.firestore()

firestore.collection('users').doc('txt3boL8JEb7X1y97usr').collection('cartItems').doc('txt3boL8JEb7X1y97usr')
firestore.doc('users/txt3boL8JEb7X1y97usr/cartItems/txt3boL8JEb7X1y97usr')
firestore.collection('users/txt3boL8JEb7X1y97usr/cartItems');