import React from 'react';
import {MaterialIcons } from "@expo/vector-icons";

import { StyleSheet, View, TextInput, Image } from 'react-native';


const Search = () =>{

    
    return (
        <View style={styles.container}>
          <View style={styles.arriba} />
          <MaterialIcons name="search" color="white" size={24} />
          <TextInput
            style={styles.texto}
            placeholder='Buscar'
            placeholderTextColor='white'
            
          ></TextInput>
                  
    
          <View style={styles.fotos}>
            <View style={styles.row}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://st1.uvnimg.com/dims4/default/0102b2f/2147483647/resize/1093x820%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fd4%2F4a%2F006304a74db4902c0b4d8d8026c8%2Fchevrolet-corvette-c8-stingray-2020-1280-08.jpg'
                }}
              />
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://st1.uvnimg.com/dims4/default/0102b2f/2147483647/resize/1093x820%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fd4%2F4a%2F006304a74db4902c0b4d8d8026c8%2Fchevrolet-corvette-c8-stingray-2020-1280-08.jpg'
                }}
              />
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://st1.uvnimg.com/dims4/default/0102b2f/2147483647/resize/1093x820%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fd4%2F4a%2F006304a74db4902c0b4d8d8026c8%2Fchevrolet-corvette-c8-stingray-2020-1280-08.jpg'
                }}
              />
            </View>
            <View style={styles.row}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://static.wikia.nocookie.net/doblaje/images/8/8d/One_Piece.png/revision/latest?cb=20190727212440&path-prefix=es'
                }}
              />
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://static.wikia.nocookie.net/doblaje/images/8/8d/One_Piece.png/revision/latest?cb=20190727212440&path-prefix=es'
                }}
              />
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://static.wikia.nocookie.net/doblaje/images/8/8d/One_Piece.png/revision/latest?cb=20190727212440&path-prefix=es'
                }}
              />
            </View>
            <View style={styles.row}>
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://static.wikia.nocookie.net/doblaje/images/8/8d/One_Piece.png/revision/latest?cb=20190727212440&path-prefix=es'
                }}
              />
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://static.wikia.nocookie.net/doblaje/images/8/8d/One_Piece.png/revision/latest?cb=20190727212440&path-prefix=es'
                }}
              />
              <Image
                style={styles.imagen}
                source={{
                  uri: 'https://static.wikia.nocookie.net/doblaje/images/8/8d/One_Piece.png/revision/latest?cb=20190727212440&path-prefix=es'
                }}
              />
            </View>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      arriba: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: 60,
        marginTop: 30,
      },
      texto: {
        fontSize: 15,
        margin: 10,
        color: '#A4A4A4',
        borderWidth: 1,
        borderColor: '#A4A4A4',
        borderRadius: 10,
        padding: 10,
        width: 250,
      },
      fotos: {
        flexDirection: 'column',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      imagen: {
        width: 100,
        height: 100,
        margin: 5,
      },
    });
    
    

export default Search;