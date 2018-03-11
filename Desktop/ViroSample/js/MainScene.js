'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';
import {apartments} from '../testDB.js'
import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroText
} from 'react-viro';


var createReactClass = require('create-react-class');


export default class MainScene extends Component {
    constructor(props) {
      super(props);
    }

  render(){
    console.warn('TEST: ', this.props['arSceneNavigator']['viroAppProps'])
    var key = 0;

    var posArr = [{position: [0, -0.5, -2] ,//front
                      rotation:[0,0,0],
                      image:require('./portal_res/360_island.jpg'),
                    poskey: 1},
                    {position: [2.5, -0.5, 0],//right
                      rotation:[0,270,0],
                    image:require('./portal_res/penn.jpg'),
                      poskey: 2},
                    {position:[0, -0.5, 2],//back
                      rotation:[0,180,0],
                      image:require('./portal_res/360_island.jpg'),
                      poskey: 3},
                    {position:[-2.5, -0.5, 0],//left
                      rotation:[0,90,0],
                      image:require('./portal_res/penn.jpg'),
                    poskey: 4}
                  ]

    return (
      <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200}/>

      <Viro3DObject
            source={require('./emoji_smile/emoji_smile.vrx')}
            position={[.5, -0.3, -1]}
            rotation={[0,-30,0]}
            scale={[.2, .2, .2]}
            type="VRX"
            dragType="FixedDistance" onDrag={()=>{}}
          />

      <ViroImage
          height={2}
          width={2}
          source={require('./portal_res/speech_bubble3.png')}
          position={[.5, 0.25, -1]}
          rotation={[0,-30,0]}
        />

        {/* <ViroText text="Walk through a portal to view 3D apartment"
                position={[.5, 0.25, -1]}
                rotation={[0,-30,0]}
                height={1} width={4}
                style = {styles.textStyle} /> */}
         {/* {this.props['arSceneNavigator']['viroAppProps'].map((apartment) => {
             let posObj = posArr[key]
             key++
          if(key <= 4){
            return (
              <ViroPortalScene key= {posObj.poskey} passable={true} dragType="FixedDistance" onDrag={()=>{}}>
                <ViroText text={apartment.address}
                position={[posObj.position[0], posObj.position[1]+1, posObj.position[2]]}
                rotation={posObj.rotation} scale={[.1, .1, .1]} height={1} width={4} style = {styles.textStyle} />
                  <ViroPortal position={posObj.position} scale={[.2, .35, .1]} rotation= {posObj.rotation}>
                    <Viro3DObject source={require('./portal_res/portal_ship/portal_ship.vrx')}
                      resources={[require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                                  require('./portal_res/portal_ship/portal_ship_normal.png'),
                                  require('./portal_res/portal_ship/portal_ship_specular.png')]}
                      // rotation= {portal.rotation}
                      type="VRX"/>
                  </ViroPortal>
                  <Viro360Image source={apartment.img} />
          </ViroPortalScene>)}
         }
          )
      } */}



      </ViroARScene>
    );
  }
  }

  var styles = StyleSheet.create({
    textStyle: {
      fontFamily: 'Arial',
      fontSize: 100,
      color: '#ffffff',
      textAlignVertical: 'center',
      textAlign: 'center',
    },
  });


module.exports = MainScene;
