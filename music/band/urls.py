from django.conf.urls import url
from band import views

urlpatterns = [
    url(r'^all/$', views.BandListView.as_view(), name='bandlist'),
    url(r'^(?P<band_id>\d+)/$', views.BandView.as_view(), name='musicband'),
]
