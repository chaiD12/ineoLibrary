# Generated by Django 4.1.6 on 2023-02-07 21:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('session', '0006_alter_session_difficulty'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Session',
        ),
    ]