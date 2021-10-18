#!/usr/bin/python3

"""Base class defination"""


class Base:
    """Base class implementation"""
    __nb_objects = 0
    def __init__(self, id=None):
        if not id == None:
            __nb_objects = id

        else:
            __nb_objects = __nb_objects + 1
            self.id = __nb_objects
