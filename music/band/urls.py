from django.conf.urls import url
from band import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^all/$', views.BandListView.as_view(), name='bandlist'),
    url(r'^(?P<band_id>\d+)/$', views.BandView.as_view(), name='musicband'),
    url(r'^api/(?P<band_id>\d+)/$', views.BandApiView.as_view(), name='apimusicband'),
]


urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])
