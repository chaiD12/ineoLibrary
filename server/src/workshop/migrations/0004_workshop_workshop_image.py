# Generated by Django 4.1.6 on 2023-02-10 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workshop', '0003_rename_worskshop_title_workshop_workshop_title_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='workshop',
            name='workshop_image',
            field=models.ImageField(null=True, upload_to='photo/%Y/%m/%d'),
        ),
    ]