#!/usr/bin/python3
# Displays all values in the states table of the database hbtn_0e_0_usa
# whose name matches that supplied as argument.
# Usage: ./2-my_filter_states.py <mysql username> \
#                                <mysql password> \
#                                <database name> \
#                                <state name searched>
"""
List all states with a name starting with N (upper N)
"""

if __name__ == "__main__":
    """ not be executed when imported """
    import MySQLdb
    from sys import argv
    conn = MySQLdb.connect(host='localhost',
                           port=3306,
                           user=argv[1],
                           passwd=argv[2],
                           db=argv[3],
                           charset="utf8")
    cur = conn.cursor()
    cur.execute("""SELECT * FROM states WHERE name LIKE BINARY 'N%'
                ORDER BY states.id ASC""")
    query_rows = cur.fetchall()
    for row in query_rows:
        print(row)
    cur.close()
    conn.close()
