import 'package:flutter/material.dart';

class AppGradients {
  /// Rainbow gradient
  static const rainbow = LinearGradient(
    begin: Alignment(0, -1),
    end: Alignment(0, 1),
    stops: [
      0,
      0.4538445723684211,
      1,
    ],
    colors: [
    Color(0xe7ab0dca),
    Color(0xf12ff3ff),
    Color(0xffec2a2a),
    ],
  );

  AppGradients._();
}
