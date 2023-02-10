# Generated by Django 4.1.6 on 2023-02-07 00:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('session', '0005_session_shared_at_session_shared_by_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='session',
            name='difficulty',
            field=models.CharField(choices=[('HARD', 'hard'), ('MEDIUM', 'medium'), ('EASY', 'easy'), ('VERY_EASY', 'very easy')], default='easy', max_length=100, null=True),
        ),
    ]