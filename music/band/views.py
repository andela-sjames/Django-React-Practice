from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.http import Http404

from rest_framework import generics
from rest_framework.response import Response

from serializers import BandSerializer
from band.models import Band


# Create your views here.
class BandView(TemplateView):

    template_name = "band/band.html"

    def get(self, request, *args, **kwargs):

        context = self.get_context_data(**kwargs)
        band_id = self.kwargs.get('band_id')

        try:
            context['band'] = Band.objects.get(id=band_id)
        except Band.DoesNotExist:
            raise Http404

        return self.render_to_response(context)


class BandListView(TemplateView):

    template_name = "band/all_band.html"


class HomeView(TemplateView):

    template_name = 'band/home.html'


# define Rest class below.

class BandApiView(generics.RetrieveUpdateDestroyAPIView):

    model = Band
    serializer_class = BandSerializer

    def get_object(self, band_id):
        try:
            return Band.objects.get(id=band_id)
        except Band.DoesNotExist:
            raise Http404

    def get(self, request, band_id, format=None):
        band = self.get_object(band_id)
        serializer = BandSerializer(band)
        return Response(serializer.data)



