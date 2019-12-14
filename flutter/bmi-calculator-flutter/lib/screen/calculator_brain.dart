import 'dart:math';

class CalculatorBrain {
  CalculatorBrain({this.height, this.weight});

  final int height;
  final int weight;
  double _bmi;

  String calculateBMI() {
    _bmi = weight / pow(height / 100, 2);
    return _bmi.toStringAsFixed(1);
  }

  String getResults() {
    if (_bmi >= 25) {
      return 'Overweight';
    } else if (_bmi > 18.5) {
      return 'Normal';
    } else {
      return 'Too skinny';
    }
  }

  String getInterpretation() {
    if (_bmi >= 25) {
      return 'Work out more, eat less!';
    } else if (_bmi > 18.5) {
      return 'Rock on!';
    } else {
      return 'Eat more!';
    }
  }
}
