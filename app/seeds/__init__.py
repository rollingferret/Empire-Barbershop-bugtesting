from flask.cli import AppGroup
# from .users import seed_users, undo_users
from .appointment import seed_appointment, undo_appointments
from .service import seed_service, undo_services
from .client import seed_client, undo_clients
from .barber import seed_barber, undo_barbers

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_clients()
        undo_appointments()
        undo_services()
        undo_barbers()
    seed_client()
    seed_barber()
    seed_appointment()
    seed_service()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_clients()
    undo_appointments()
    undo_services()
    undo_barbers()
    # Add other undo functions here
