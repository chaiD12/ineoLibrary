# Generated by Django 4.1.6 on 2023-04-13 21:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('workshop', '0002_workshop_workshop_attachements'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workshop',
            name='workshop_attachements',
        ),
    ]