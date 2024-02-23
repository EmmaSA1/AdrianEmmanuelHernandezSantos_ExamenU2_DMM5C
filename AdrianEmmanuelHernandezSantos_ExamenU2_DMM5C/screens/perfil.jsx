import { Card } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';



const PerfilNav = () =>{
    return (
        <View style={styles.container}>
          <Card>
                <Card.Title style={{justifyContent: 'flex-start'}}>{"Aserejex22"}</Card.Title>
                <Card.Divider />
                <Image
                    style={styles.circulo}
                    source={{
                        uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/910ef7ee-7fcd-4f55-9b6c-f2056fdda32c/dg6sf1u-9a575fb4-d285-46c3-b834-ec131d7dae28.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxMGVmN2VlLTdmY2QtNGY1NS05YjZjLWYyMDU2ZmRkYTMyY1wvZGc2c2YxdS05YTU3NWZiNC1kMjg1LTQ2YzMtYjgzNC1lYzEzMWQ3ZGFlMjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JFqY1H0PR__QS7NUT_cHZ6CWoN0JIEm6DlgcsDsgCLI'
                    }} />
            </Card>
            
                  
    
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
      circulo: {
        height: 70,
        width: 70,
        borderRadius: 50, 
        margin: 10, 
        borderColor: 'orange', 
    },
    });
    
    

export default PerfilNav;