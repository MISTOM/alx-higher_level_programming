#!/usr/bin/python3
# 1-rectangle.py
"""Defining class Rectangle
"""

class Rectangle:
    """Class rectangle with properties @width and @height
    """

    def __init__(self, width=0, height=0):
        """Initialize a new Rectangle
            
        Args: 
            width (int): Width of the rectangle
            height (int): Height of the rectangle
        """
        self.__width = width
        self.__height = height

    @property
    def width(self):
        """Get the width of the triangle"""
        return self.__width

    @width.setter
    def width(self, value):
        """Set the width of the triangle"""
        if not isinstance(value, int):
            raise TypeError("width must be an integer")
        elif value < 0:
            raise ValueError("width must be >= 0")
        else: self.__width = value

    @property
    def height(self):
        """Get the height of the triangle"""
        return self.__height

    @height.setter
    def height(self, value):
        """Set the height of the triangle"""
        if not isinstance(value, int):
            raise TypeError("height must be an integer")
        elif value < 0:
            raise ValueError("height must be >= 0")
        else: self.__height = value
