// src/screens/BranchPathScreen.js
import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { branchPaths } from '../data/mockState';
import LevelNode from '../components/LevelNode';

export default function BranchPathScreen({ route, navigation }){
  const { id, name, icon } = route.params || {};
  const data = branchPaths[id] || [];

  return (
    <ScrollView style={{flex:1, backgroundColor:'#f5f7fb'}} contentContainerStyle={{padding:16, alignItems:'center'}}>
      <Pressable onPress={()=>navigation.goBack()} style={{alignSelf:'flex-start'}}>
        <Text>← Ramas</Text>
      </Pressable>

      <View style={{backgroundColor:'#fff', borderRadius:16, padding:14, width:'100%', maxWidth:860,
        shadowColor:'#000', shadowOpacity:0.06, shadowRadius:8, shadowOffset:{width:0,height:4}, elevation:2}}>
        <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
          <Text style={{fontSize:28}}>{icon}</Text>
          <Text style={{fontWeight:'800', fontSize:18}}>{name}</Text>
        </View>
        <View style={{height:6, backgroundColor:'#eef2ff', borderRadius:6, marginTop:10}}>
          <View style={{height:6, width:`0%`, backgroundColor:'#6366f1', borderRadius:6}} />
        </View>
      </View>

      <View style={{width:'100%', maxWidth:860, marginTop:16, backgroundColor:'#ffffffaa', borderRadius:16, paddingVertical:24}}>
        {data.map((item, idx)=>(
          <LevelNode
            key={item.id}
            index={idx}
            item={item}
            isLocked={item.locked}
            onPress={()=>{
              const next = data[idx+1]?.id;
              navigation.navigate('Play', { branchId: id, levelId: item.id, nextLevelId: next, titleFromNode: item.title });
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
}
