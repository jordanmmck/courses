import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() => runApp(XylophoneApp());

class XylophoneApp extends StatelessWidget {
  void playSound(int num) {
    final player = AudioCache();
    player.play('note$num.wav');
  }

  Expanded buildKey({Color color, int soundNum}) => (Expanded(
        child: FlatButton(
            color: color,
            onPressed: () {
              playSound(soundNum);
            }),
      ));

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.black,
        body: SafeArea(
            child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            buildKey(color: Colors.red, soundNum: 1),
            buildKey(color: Colors.orange, soundNum: 2),
            buildKey(color: Colors.yellow, soundNum: 3),
            buildKey(color: Colors.lightGreen, soundNum: 4),
            buildKey(color: Colors.green, soundNum: 5),
            buildKey(color: Colors.blue, soundNum: 6),
            buildKey(color: Colors.purple, soundNum: 7),
          ],
        )),
      ),
    );
  }
}
