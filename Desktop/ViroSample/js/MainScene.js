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
    return (
      <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
          <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
            <Viro3DObject source={require('./portal_res/portal_ship/portal_ship.vrx')}
              resources={[require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                          require('./portal_res/portal_ship/portal_ship_normal.png'),
                          require('./portal_res/portal_ship/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require("./portal_res/360_island.jpg")} />
        </ViroPortalScene>

        {/* <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
          <ViroPortal position={[1, 0, -1]} scale={[.1, .1, .1]} rotation={[0, 45, 0]}>
            <Viro3DObject source={require('./portal_res/portal_ship/portal_ship.vrx')}
              resources={[require('./portal_res/portal_ship/portal_ship_diffuse.png'),
                          require('./portal_res/portal_ship/portal_ship_normal.png'),
                          require('./portal_res/portal_ship/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Video source={require("./portal_res/trippy_vid.mp4")} loop={true} />
        </ViroPortalScene> */}

        <ViroPortalScene>
            <ViroPortal position={[1, 0, -1]} scale={[.5, .5, .5]}>
              <Viro3DObject
                  source={require('./portal_res/Male.OBJ')}
                  // resources={[require('./portal_res/Wolf.c4d')
                  //   ]}
                  // highAccuracyGaze={true}
                  position={[1, 3, -5]}
                  // scale={[2, 2, 2]}
                  rotation={[45, 0, 0]}
                  type="OBJ"
                  // transformBehaviors={["billboard"]}
                  />
                          </ViroPortal>
        </ViroPortalScene>

      </ViroARScene>
    );
  },
});

module.exports = MainScene;
