#!/usr/bin/python3

"""Base class defination"""


class Base:
    """Base class implementation
        
        Attributes:
        __nb_objects (int): The number of instanciated bases

    """
    __nb_objects = 0
    def __init__(self, id=None):
        """Initialize new base
        Args:
        id (int): Id's of the instanciated Base
        """
        if not id == None:
            __nb_objects = id

        else:
            Base.__nb_objects = Base.__nb_objects + 1
            self.id = Base.__nb_objects
