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
  ViroText,
  ViroImage
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
            position={[.8, -0.1, -1]}
            rotation={[0,-39,0]}
            scale={[.2, .2, .2]}
            type="VRX"
            dragType="FixedDistance" onDrag={()=>{}}
          />

      <ViroImage
          height={.75}
          width={.75}
          source={require('./portal_res/speech_bubble3.png')}
          position={[.5, 0.25, -1]}
          rotation={[0,-30,0]}
        />
         {this.props['arSceneNavigator']['viroAppProps'].map((apartment) => {
             let posObj = posArr[key]
             key++
          if(key <= 4){
            return (
              <ViroPortalScene key= {posObj.poskey} passable={true} dragType="FixedDistance" onDrag={()=>{}}>
                  <ViroPortal position={posObj.position} scale={[.8, 1, .1]} rotation= {posObj.rotation}>
                    <Viro3DObject source={require('./portal_res/portal_ship/portal_wood_frame.vrx')}
                      resources={[require('./portal_res/portal_ship/portal_wood_frame_diffuse.png'),
                                  require('./portal_res/portal_ship/portal_wood_frame_normal.png'),
                                  require('./portal_res/portal_ship/portal_wood_frame_specular.png')]}
                      // rotation= {portal.rotation}
                      type="VRX"/>
                  </ViroPortal>
                  <Viro360Image source={require('./portal_res/apt.jpg')} />
          </ViroPortalScene>)}
         }
          )
      }



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
