from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime
from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, Float, Date, Enum, ForeignKey
from flask_login import UserMixin

class Appointment(db.Model, UserMixin):
    __tablename__ = 'appointments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    barber_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    client_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    service_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('services.id')))
    date = db.Column(db.String(50), nullable=False)
    time = db.Column(db.String(50),  nullable=False)
    repeat = db.Column(db.String(50))
    created_at = db.Column(db.Date, default=datetime.datetime.now())
    updated_at = db.Column(db.Date, default=datetime.datetime.now())

    #Relationships
    barber = db.relationship('User', foreign_keys=[barber_id], back_populates='appointments_as_barber')
    client = db.relationship('User', foreign_keys=[client_id], back_populates='appointments_as_client')
    services = db.relationship('Service', back_populates='appointments')

    def to_appointment_dict(self):
        return {
            'id': self.id,
            'barber': self.barber.to_dict() if self.barber else None,
            'client': self.client.to_dict() if self.client else None,
            'service': self.services.to_service_dict() if self.services else None,
            'date': self.date,
            'time': self.time,
            'repeat': self.repeat,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
