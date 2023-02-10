# Generated by Django 4.1.6 on 2023-02-07 22:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workshop', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workshop',
            name='uses',
            field=models.CharField(choices=[('BUSINESS_CREATION', 'Business Creation'), ('POST_CREATION', 'Post Creation'), ('AGRICULTURE_BUSINESS', 'Agriculture Business'), ('STARTUPS', 'Startups'), ('SOCIAL_BUSINESS', 'Social Business'), ('GREEN_BUSINESS', 'Green Business'), ('WOMEN_ENTREPRENERSHIP', 'Women Entreprenership')], default='Post Creation', max_length=100),
        ),
    ]