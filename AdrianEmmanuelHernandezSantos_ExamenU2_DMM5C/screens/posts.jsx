import React, { useState } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import {  Image } from '@rneui/themed';
import { StyleSheet, View, Text, StatusBar, SectionList, TouchableOpacity, Modal } from "react-native";

const Posts = () => {

    const posts = [
        { image: require("../assets/guero.jpg"), description: "Me gusta mucho los huevos", likes: 200, username: "Aserejex22", userimage: require("../assets/girasol.png") },
        { image: require("../assets/simmm.png"), description: "Hola", likes: 70, username: "Emanuel Santos", userimage: require("../assets/edson.png") },
        { image: require("../assets/spiderm.png"), description: "Pa cuando otra peli se Spiderman? ", likes: 50, username: "Mercy", userimage: require("../assets/messi.png") },
        { image: require("../assets/Estrella.png"), description: "Una estrella XD ", likes: 50, username: "Estrellita", userimage: require("../assets/mercy.jpg") }
    ];

    const [postsH, setPosts] = useState(posts);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    const likePosts = (item) => {
        const updatedPosts = postsH.map(post => {
            if (post === item) {
                return { ...post, likes: post.likes + 1 };
            }
            return post;
        });

        setPosts(updatedPosts);
    };

    const abrirModal = (item) => {
        setModalVisible(true);
        setSelectedItem(item);
    };

    return (
        <View style={styles.container}>
            <View style={styles.historias}> 
                {postsH.map((item, index) => (
                    <TouchableOpacity key={index} onLongPress={() => abrirModal(item)}>
                        <Image
                            style={styles.circulo}
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudGc-RtVs40x614vN2jSUuu6RJdSiQTrgUhxuSmRmFw&s'
                            }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <SectionList
                sections={[{ title: "Posts", data: postsH }]}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.cardPost}>
                            <TouchableOpacity onPress={() => goToUser(item)}>
                                <View style={styles.userInfo}>
                                    <Image style={styles.profilePhoto} source={item.userimage} />
                                    <Text style={[styles.userName, { color: 'white' }]}>{item.username}</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Image style={styles.postImage} source={item.image} />
                            </View>
                            <View style={styles.icons}>
                                <TouchableOpacity onPress={() => likePosts(item)}>
                                    <MaterialIcons name="star-outline" size={24} />
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white'
                                }}>{item.likes} Personas les gusta</Text>
                            </View>
                            <View style={styles.description}>
                                <Text style={{
                                    fontSize: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white'
                                }}>{item.description}</Text>
                            </View>
                        </View>
                    );
                }}
            />
            <Modal style={{backgroundColor: 'whithe'}}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={() => goToUser(selectedItem)}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={{ color: 'white', marginTop: 10}}>X</Text>
                        </TouchableOpacity>
                        </TouchableOpacity>
                        <View>
                            <Image style={styles.postImage} source={selectedItem?.image} />
                        </View>
                        
                    </View>
                </View>
            </Modal>
            <StatusBar barStyle={"light-content"} backgroundColor={"#039779"} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'black',
    },
    userInfo: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
    icons: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginTop: 3
    },
    cardPost: {
        backgroundColor: '#2F2D2C',
        width: 'auto',
        height: 'auto',
        margin: 10,
    },
    userName: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        marginLeft: 3,
    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5,
    },
    postImage: {
        width: 400,
        height: 350,
    },
    description: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginTop: 3,
        marginBottom: 5,
        marginLeft: 3,
    },
    circulo: {
        height: 70,
        width: 70,
        borderRadius: 50, 
        margin: 10, 
        borderColor: 'orange', 
    },
    historias: {
        flexDirection: 'row',
        marginLeft: 30,
        alignSelf: 'flex-start',
    },
});

export default Posts;
