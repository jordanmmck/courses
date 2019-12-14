// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'dart:async';
import 'dart:ffi';
import 'dart:math';

import 'package:flutter_clock_helper/model.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

enum _Element {
  background,
  text,
  shadow,
}

final _lightTheme = {
  _Element.background: Color(0xFF81B3FE),
  _Element.text: Colors.white,
  _Element.shadow: Colors.black,
};

final _darkTheme = {
  _Element.background: Colors.black,
  _Element.text: Colors.white,
  _Element.shadow: Color(0xFF174EA6),
};

/// A basic digital clock.
///
/// You can do better than this!
class DigitalClock extends StatefulWidget {
  const DigitalClock(this.model);

  final ClockModel model;

  @override
  _DigitalClockState createState() => _DigitalClockState();
}

class _DigitalClockState extends State<DigitalClock> {
  DateTime _dateTime = DateTime.now();
  Timer _timer;

  @override
  void initState() {
    super.initState();
    widget.model.addListener(_updateModel);
    _updateTime();
    _updateModel();
  }

  @override
  void didUpdateWidget(DigitalClock oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.model != oldWidget.model) {
      oldWidget.model.removeListener(_updateModel);
      widget.model.addListener(_updateModel);
    }
  }

  @override
  void dispose() {
    _timer?.cancel();
    widget.model.removeListener(_updateModel);
    widget.model.dispose();
    super.dispose();
  }

  void _updateModel() {
    setState(() {
      // Cause the clock to rebuild when the model changes.
    });
  }

  void _updateTime() {
    setState(() {
      _dateTime = DateTime.now();
      // Update once per minute. If you want to update every second, use the
      // following code.
      // _timer = Timer(
      //   Duration(minutes: 1) -
      //       Duration(seconds: _dateTime.second) -
      //       Duration(milliseconds: _dateTime.millisecond),
      //   _updateTime,
      // );
      // Update once per second, but make sure to do it at the beginning of each
      // new second, so that the clock is accurate.
      _timer = Timer(
        Duration(seconds: 1) - Duration(milliseconds: _dateTime.millisecond),
        _updateTime,
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    final colors = Theme.of(context).brightness == Brightness.light
        ? _lightTheme
        : _darkTheme;
    final hour =
        DateFormat(widget.model.is24HourFormat ? 'HH' : 'hh').format(_dateTime);
    final month = DateFormat('MM').format(_dateTime);
    final minute = DateFormat('mm').format(_dateTime);
    final second = DateFormat('ss').format(_dateTime);

    final numHours = int.parse(hour);
    final numMinutes = int.parse(minute);
    final numSeconds = int.parse(second);

    final hourRatio = numHours / 24.0;
    final minuteRatio = numMinutes / 60.0;
    final secondRatio = numSeconds / 60.0;

    final fontSize = MediaQuery.of(context).size.width / 20;
    // final offset = -fontSize / 7;
    final defaultStyle = TextStyle(
      color: colors[_Element.text],
      fontFamily: 'Helvetica',
      fontSize: fontSize,
      // shadows: [
      //   Shadow(
      //     blurRadius: 0,
      //     color: colors[_Element.shadow],
      //     offset: Offset(10, 10),
      //   ),
      // ],
    );

    return Container(
        color: colors[_Element.background],
        child: Center(
            child: DefaultTextStyle(
                style: defaultStyle,
                child: Stack(
                  children: <Widget>[
                    Positioned(
                      left: 75,
                      top: 125,
                      child: Row(
                        children: <Widget>[
                          Text(hour),
                          Text(':'),
                          Text(minute),
                          Text(':'),
                          Text(second),
                        ],
                      ),
                    ),
                    Positioned(
                        left: null,
                        top: null,
                        child: SizedBox(
                          height: 300,
                          width: 300.0,
                          child: CircularProgressIndicator(
                            value: hourRatio,
                            strokeWidth: 7.0,
                          ),
                        )),
                    Positioned(
                        left: 10,
                        top: 10,
                        child: SizedBox(
                          height: 280.0,
                          width: 280.0,
                          child: CircularProgressIndicator(
                            value: minuteRatio,
                            strokeWidth: 7.0,
                          ),
                        )),
                    Positioned(
                        left: 20,
                        top: 20,
                        child: SizedBox(
                          height: 260.0,
                          width: 260.0,
                          child: CircularProgressIndicator(
                            value: secondRatio,
                            strokeWidth: 7.0,
                          ),
                        )),
                  ],
                ))));
  }
}

// Expanded(
//   child: Center(
//     child: SizedBox(
//       height: 50.0,
//       width: 50.0,
//       child: CircularProgressIndicator(
//         value: hourRatio,
//         strokeWidth: 7.0,
//       ),
//     ),
//   ),
// ),
// Expanded(
//   child: Center(
//     child: SizedBox(
//       height: 50.0,
//       width: 50.0,
//       child: CircularProgressIndicator(
//         value: minuteRatio,
//         strokeWidth: 7.0,
//       ),
//     ),
//   ),
// ),
// Expanded(
//   child: Center(
//     child: SizedBox(
//       height: 50.0,
//       width: 50.0,
//       child: CircularProgressIndicator(
//         value: secondRatio,
//         strokeWidth: 7.0,
//       ),
//     ),
//   ),
// )
