"""empty message

Revision ID: 75bb1a1dbf8a
Revises:
Create Date: 2023-07-17 15:25:17.881664

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

# revision identifiers, used by Alembic.
revision = '75bb1a1dbf8a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('services',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('service_name', sa.String(length=50), nullable=False),
    sa.Column('description', sa.String(length=300), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('time_frame', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_types',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('phone_number', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('user_type', sa.Integer(), nullable=True),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.ForeignKeyConstraint(['user_type'], ['user_types.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('appointments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('barber_id', sa.Integer(), nullable=True),
    sa.Column('client_id', sa.Integer(), nullable=True),
    sa.Column('service_id', sa.Integer(), nullable=True),
    sa.Column('date', sa.String(length=50), nullable=False),
    sa.Column('time', sa.String(length=50), nullable=False),
    sa.Column('repeat', sa.String(length=50), nullable=True),
    sa.Column('created_at', sa.Date(), nullable=True),
    sa.Column('updated_at', sa.Date(), nullable=True),
    sa.ForeignKeyConstraint(['barber_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['client_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['service_id'], ['services.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # op.create_table('cash_register',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('barber_id', sa.Integer(), nullable=True),
    # sa.Column('service_id', sa.Integer(), nullable=True),
    # sa.Column('charge', sa.Enum('charge', name='transaction_type_enum'), nullable=True),
    # sa.Column('total_items', sa.Integer(), nullable=False),
    # sa.Column('total_price', sa.Integer(), nullable=False),
    # sa.Column('created_at', sa.Date(), nullable=True),
    # sa.Column('updated_at', sa.Date(), nullable=True),
    # sa.ForeignKeyConstraint(['barber_id'], ['users.id'], ),
    # sa.ForeignKeyConstraint(['service_id'], ['services.id'], ),
    # sa.PrimaryKeyConstraint('id')
    # )
    # op.create_table('locations',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('barber_id', sa.Integer(), nullable=True),
    # sa.Column('address', sa.String(length=100), nullable=False),
    # sa.Column('city', sa.String(length=100), nullable=False),
    # sa.Column('state', sa.String(length=50), nullable=False),
    # sa.Column('country', sa.String(length=50), nullable=False),
    # sa.Column('lat', sa.Integer(), nullable=False),
    # sa.Column('lng', sa.Integer(), nullable=False),
    # sa.Column('name', sa.String(length=100), nullable=False),
    # sa.Column('description', sa.String(length=500), nullable=True),
    # sa.ForeignKeyConstraint(['barber_id'], ['users.id'], ),
    # sa.PrimaryKeyConstraint('id'),
    # sa.UniqueConstraint('address')
    # )
    # op.create_table('wallet',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('client_id', sa.Integer(), nullable=True),
    # sa.Column('credit_card', sa.Integer(), nullable=False),
    # sa.Column('gift_card', sa.Integer(), nullable=True),
    # sa.ForeignKeyConstraint(['client_id'], ['users.id'], ),
    # sa.PrimaryKeyConstraint('id')
    # )
    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###



def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###

    op.drop_table('appointments')
    op.drop_table('users')
    op.drop_table('user_types')
    op.drop_table('services')
    # ### end Alembic commands ###
