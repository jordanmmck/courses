import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.blueGrey,
        body: SafeArea(
            child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Center(
              child: CircleAvatar(
                radius: 50,
                backgroundImage: AssetImage('images/me.jpg'),
              ),
            ),
            Text(
              'Jordan McKinney',
              style: TextStyle(
                fontFamily: 'Pacifico',
                color: Colors.white,
                fontSize: 40,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              'FULL SMACK GEB DEVELOPER',
              style: TextStyle(
                fontFamily: 'Source Sans Pro',
                color: Colors.teal[100],
                fontSize: 20,
                letterSpacing: 2.5,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(
              height: 20,
              width: 150,
              child: Divider(color: Colors.teal[100]),
            ),
            Card(
                margin: EdgeInsets.symmetric(vertical: 10, horizontal: 25),
                child: ListTile(
                  leading: Icon(Icons.phone, color: Colors.teal),
                  title: Text(
                    '314 159 7653',
                    style: TextStyle(
                        fontSize: 20,
                        color: Colors.teal[900],
                        fontFamily: 'Source Sans Pro'),
                  ),
                )),
            Card(
              margin: EdgeInsets.symmetric(vertical: 0, horizontal: 25),
              child: ListTile(
                leading: Icon(Icons.email, color: Colors.teal),
                title: Text(
                  'jordanmmck@gmail.com',
                  style: TextStyle(
                      fontSize: 20,
                      color: Colors.teal[900],
                      fontFamily: 'Source Sans Pro'),
                ),
              ),
            )
          ],
        )),
      ),
    );
  }
}
