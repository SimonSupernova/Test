import 'package:flutter/material.dart';

class AppGradients {
  static const test = LinearGradient(
    begin: Alignment(0, -1),
    end: Alignment(0, 1),
    stops: [
      0,
      1,
    ],
    colors: [
    Color(0x00000000),
    Color(0xff000000),
    ],
  );

  AppGradients._();
}
