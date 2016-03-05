# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Band',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=128)),
                ('date_added', models.DateField(auto_now_add=True)),
                ('image', models.CharField(max_length=255, null=True, blank=True)),
                ('bio', models.TextField(null=True, blank=True)),
            ],
        ),
    ]
