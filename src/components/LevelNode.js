// src/components/LevelNode.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function LevelNode({ index, item, isLocked, onPress }) {
  const Node = (
    <View style={{alignItems:'center', marginVertical:18}}>
      {index !== 0 && (<View style={{width:4, height:48, backgroundColor:'rgba(0,0,0,0.06)', borderRadius:2, marginBottom:12}} />)}

      <View style={{
        width:84, height:84, borderRadius:84, backgroundColor:'#fff',
        alignItems:'center', justifyContent:'center',
        borderWidth:2, borderColor:isLocked ? '#d1d5db':'#c7d2fe',
        shadowColor:'#000', shadowOpacity:0.12, shadowRadius:10, shadowOffset:{width:0,height:6}, elevation:4
      }}>
        <View style={{ width:64, height:64, borderRadius:64, backgroundColor:item.color, alignItems:'center', justifyContent:'center' }}>
          <Text style={{color:'#fff', fontWeight:'800'}}>Lv {index+1}</Text>
        </View>
      </View>

      <Text style={{marginTop:12, fontWeight:'700'}}>{item.title}</Text>
      <Text style={{opacity:0.7, fontSize:12, textAlign:'center', maxWidth:220}}>{item.desc}</Text>
      <Text style={{opacity:0.8, fontSize:12, marginTop:6}}>⭐ {item.xp} XP · {item.questions} preguntas</Text>
      {isLocked ? <Text style={{marginTop:6, fontSize:12, opacity:0.6}}>🔒 Bloqueado</Text> : <Text style={{marginTop:6, fontSize:12, color:'#6366f1'}}>Tocar para jugar</Text>}
    </View>
  );

  return isLocked ? Node : (
    <Pressable onPress={onPress} style={{alignItems:'center'}}>{Node}</Pressable>
  );
}
