'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

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
} from 'react-viro';


var createReactClass = require('create-react-class');
var MainScene = createReactClass({

  render: function() {
    var key = 0;
    var arrToMap = [{position: [0, -0.5, -2] ,//front
                      rotation:[0,0,0],
                      image:require('./portal_res/360_island.jpg'),
                    key: 1},
                    {position: [2, -0.5, 0],//right
                      rotation:[0,270,0],
                      image:require('./portal_res/360_island.jpg'),
                      key: 2},
                    {position:[0, -0.5, 2],//back
                      rotation:[0,180,0],
                      image:require('./portal_res/360_island.jpg'),
                      key: 3},
                    {position:[-2, -0.5, 0],//left
                      rotation:[0,90,0],
                      image:require('./portal_res/360_island.jpg'),
                    key: 4}]

    return (
      <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200}/>
         {
           arrToMap.map(portal => {
          return (
              <ViroPortalScene key= {+portal.key} passable={true} dragType="FixedDistance" onDrag={()=>{}}>
                  <ViroPortal position={portal.position} scale={[.2, .25, .1]} rotation= {portal.rotation}>
                    <Viro3DObject source={require('./portal_res/portal_ship/portal_ship.vrx')}
                      resources={[require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                                  require('./portal_res/portal_ship/portal_ship_normal.png'),
                                  require('./portal_res/portal_ship/portal_ship_specular.png')]}
                      // rotation= {portal.rotation}
                      type="VRX"/>
                  </ViroPortal>
                  <Viro360Image source={portal.image} />
          </ViroPortalScene>)})
      }


      </ViroARScene>
    );
  },
});

module.exports = MainScene;
